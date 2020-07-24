import { Component, OnInit, OnDestroy } from '@angular/core';
import { ClaimServiceService } from '../Services/claim-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MyFile } from '../../assets/model/file';

@Component({
  selector: 'app-document-status',
  templateUrl: './document-status.component.html',
  styleUrls: ['./document-status.component.scss']
})
export class DocumentStatusComponent implements OnInit, OnDestroy {
  id: string;
  private sub: any;
  certificateFiles = [];
  noOfCerti=0;
  noOfMed=0;
  medicalFiles = [];
  fileToUpload: any;
  f: MyFile;
  fileData: any;
  claimdata: any;
  originalData: any;

  constructor(private claimService: ClaimServiceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
      this.getDocuments(this.id);
  }, err => {
    this.router.navigate(['/status']);
  });
}

getDocuments(id): void {
  this.claimService.getDocument().subscribe(data => {
    this.originalData = data;
    data.claimDocument.forEach( el => {
      if (el.id === id) {
        this.fileData = el;
      }
    });
    this.certificateFiles.length = 0;
    this.medicalFiles.length = 0;
    this.fileData.documents.forEach(element => {
      if (element.fileType === 'certificate') {
        this.certificateFiles.push(element);
        this.noOfCerti++;
      } else {
        this.medicalFiles.push(element);
        this.noOfMed++;
      }
    });
  });
}

goBack() {
  this.router.navigate(['/status']);
}

handleFileInput(files: FileList, type): void {
  this.fileToUpload = files.item(0);
  this.f = new MyFile(this.fileToUpload.name, type, this.fileToUpload.size/1000 + 'MB');
  this.originalData.claimDocument.forEach(el => {
    if (el.id === this.id) {
      el.documents.push( this.f);
    }
  });
  // this.fileData.documents.push(this.f);
  console.log(this.originalData);
  if (type === 'certificate') {
    this.noOfCerti++;
  } else {
    this.noOfMed++;
  }
  this.claimService.updateDocument(this.id, this.originalData).subscribe(data => {
    if (this.noOfMed > 0 && this.noOfCerti > 0) {
    this.claimService.getClaimsData().subscribe(data1 => {
      data1.claims.forEach(element => {
        if (element.id === this.id  && element.claimDetails.claimStatus === 'ADDITIONAL_INFO_REQUIRED') {
          this.claimdata = element;
          this.claimdata.claimDetails.claimStatus = 'IN_PROGRESS';
          this.claimService.saveClaimsData(this.id, data1).subscribe(data2 => {
            console.log(data2);
          });
        }
      });
      this.getDocuments(this.id);
    });
  }
  });
}

ngOnDestroy(): void {
  this.sub.unsubscribe();
}
}
