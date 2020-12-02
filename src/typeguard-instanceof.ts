class Doctor {
    isHospitalApproved(): boolean {
        // ...
        return false;
    }
}

class Patient {
    isHealthIDPresent(): boolean {
        // ...
        return true;
    }
}

type User = Doctor | Patient;

function signup(userSetup: User) : string {
    let message: string;
    if (userSetup instanceof Doctor) {
        message = userSetup.isHospitalApproved() ? 'Create account for Doctor' : 'Doctor doesnot have valid background';
    }

    if (userSetup instanceof Patient) {
        message = userSetup.isHealthIDPresent() ? 'Create account for Patient' : 'Patient doesnot have ID';
    }
    return message;
}

console.log('Doctor > ' + signup(new Doctor()));
console.log('Patient > ' + signup(new Patient()));