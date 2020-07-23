export class ClaimDetails {
    claimNumber: string;
    claimStatus: string;
    dateSubmitted: string;

    constructor(claimNumber, claimStatus, dateSubmitted) {
        this.claimNumber = claimNumber;
        this.claimStatus = claimStatus;
        this.dateSubmitted = dateSubmitted;
    }
}