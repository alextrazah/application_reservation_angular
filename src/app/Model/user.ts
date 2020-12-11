export class User {
  constructor(id: any, username: any, email: any , role: any  , password: any) {
    this.id = id;
    this.username = username;
    this.email = email;
    this.role = role;
    this.password = password ;
    this.connected = 1 ;

  }
  id: number;
  username: string;
  email: string;
  role: string;
  password: string;
  connected: number;
}
