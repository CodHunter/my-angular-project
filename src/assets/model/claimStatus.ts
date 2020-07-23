import { ClaimDetails } from "./claimDetails";
import { PatientDetails } from "./patientDetails";

export class ClaimStatus {
    id: string;
    claimDetails: ClaimDetails;
    patientDetails: PatientDetails;

    constructor(id, claimDetails, patientDetails) {
        this.id = id;
        this.claimDetails = claimDetails;
        this.patientDetails = patientDetails;
    }
}