/*
Case Study: User-Defined Types in TypeScript

In a hospital management system, data such as patient details,
vital signs, and staff roles must be structured and type-safe.
User-defined types help organize this complex data clearly
and make the system easy to extend and maintain.
*/

export {}; // prevents redeclaration issues when compiling multiple files


// -------------------- ENUM --------------------

// Enum for patient status
enum PatientConditionStatus {
  Admitted,
  Discharged,
  UnderObservation
}


// -------------------- TUPLES --------------------

// Tuple for blood pressure readings [systolic, diastolic]
type BloodPressureTuple = [number, number];


// -------------------- INTERFACE --------------------

// Interface defining patient structure
interface PatientRecord {
  patientId: number;
  patientName: string;
  patientAge: number;
  condition: PatientConditionStatus;
  bloodPressure: BloodPressureTuple;
}


// -------------------- ARRAY OF INTERFACE --------------------

// Collection of patients
let patientRecordsList: PatientRecord[] = [
  {
    patientId: 1,
    patientName: "Anita",
    patientAge: 30,
    condition: PatientConditionStatus.Admitted,
    bloodPressure: [120, 80]
  },
  {
    patientId: 2,
    patientName: "Neha",
    patientAge: 45,
    condition: PatientConditionStatus.UnderObservation,
    bloodPressure: [130, 85]
  }
];


// -------------------- CLASS --------------------

// Class representing a nurse
class NurseStaff {
  nurseName: string;

  constructor(name: string) {
    this.nurseName = name;
  }

  updateVitals(
    patient: PatientRecord,
    newVitals: BloodPressureTuple
  ): void {
    patient.bloodPressure = newVitals;
    console.log(
      this.nurseName + " updated vitals for " + patient.patientName
    );
  }
}


// Using the class
let nurseMember = new NurseStaff("Carol");
let updatedVitals: BloodPressureTuple = [118, 76];
nurseMember.updateVitals(patientRecordsList[0], updatedVitals);


// -------------------- INTERACTIVE CHALLENGE (SOLUTION) --------------------

// Enum for staff roles
enum HospitalStaffRole {
  Doctor,
  Nurse,
  Admin
}

// Interface for staff members
interface HospitalStaff {
  staffId: number;
  staffName: string;
  staffRole: HospitalStaffRole;
}

// Array of staff members
let hospitalStaffList: HospitalStaff[] = [
  { staffId: 101, staffName: "Dr. Sharma", staffRole: HospitalStaffRole.Doctor },
  { staffId: 102, staffName: "Nina", staffRole: HospitalStaffRole.Nurse },
  { staffId: 103, staffName: "Raj", staffRole: HospitalStaffRole.Admin }
];

// Function to print staff summary
function printStaffSummary(): void {
  for (let staff of hospitalStaffList) {
    console.log(
      "Name: " +
        staff.staffName +
        ", Role: " +
        HospitalStaffRole[staff.staffRole]
    );
  }
}

// Function call
printStaffSummary();


/*
Conclusion:
User-defined types such as arrays, tuples, enums, interfaces,
and classes allow complex real-world data to be modeled safely.
They improve code clarity, reduce errors, and make applications
scalable and easy to maintain.
*/
