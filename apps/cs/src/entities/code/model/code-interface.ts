export interface ICode {
  lwpoCd: string;
  upCd: string;
  lwpoCdNm: string;
}

export interface CodeService {
  getCode(upCd: string): Promise<ICode[]>;
}
