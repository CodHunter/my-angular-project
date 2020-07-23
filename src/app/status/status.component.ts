import { Component, OnInit } from '@angular/core';
import { ClaimServiceService } from '../Services/claim-service.service';
import { ClaimStatus } from '../../assets/model/claimStatus';
import { Router } from '@angular/router';
import {Constants} from '../../assets/constants/constants';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent implements OnInit {
  claimData: ClaimStatus[] = [];

  constructor(private claimService: ClaimServiceService, private router: Router) { }

  ngOnInit(): void {
    this.claimService.getClaimsData().subscribe(data => {
      this.claimData = data.claims;
    });
  }

  showClaimDetails(claim): void {
    this.router.navigate(['/document-status', claim.claimDetails.claimNumber]);
  }

  isActive(status): boolean{
    if (status === 'ADDITIONAL_INFO_REQUIRED') {
      return false;
    } else {
      return true;
    }
  }

}
