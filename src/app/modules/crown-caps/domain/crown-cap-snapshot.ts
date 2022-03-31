import {CrownCapsDto} from "@app/modules/crown-caps/domain/crown-caps-dto";
import {FileInfo} from "@app/modules/crown-caps/domain/file-info";

export type CrownCapSnapshot = {
  crownCapInfo: CrownCapsDto;
  file: FileInfo;
  fileHash: string;
  storageRef: string;
};
