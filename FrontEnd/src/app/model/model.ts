export interface SingleCFirmwareUpload{

    Name: string;
    ServerIP: string;
    UserName : string;
    FilePath : string;
    FileSize: string;
    Password: string;
    ReleaseNote: string;
    firmwareType: string;
    filename: string;
    IsFirmwareC: boolean;
    Port: number;
}

export interface EditFirmwareFileSize{
    versionName :string;
    fileSize :string;
}

export interface UploadJavaFirmware{

    Name: string;
    ServerIP: string;
    UserName : string;
    FilePath : string;
    FileSize: string;
    Password: string;
    ReleaseNote: string;
    firmwareType: string;
    filename: string;
    IsFirmwareC: boolean;
    Port: number;
}


export interface UploadIotFirmware{
    versionName: string;
    fileName: string;
    Type: string;
    
}

export interface UpgradeFirmwareCombination{
    javaV: string;
    CV: string;
}

export interface OutboundCdgMultiple{
    
   invoice: string;
   device: string;
   dispatch: string;
   from: string;
   to: string;
}

export class Firmware {
    name: string[];
    
    constructor() {
        this.name = ['TAP66', 'TAP76', 'TAP66_2BOX', 'TAP76C', 'TAP76D', 'TAP86',
    'TAP76A', 'UNKNOWN', 'TAP66A', 'TAPI17C'];
    }
}

