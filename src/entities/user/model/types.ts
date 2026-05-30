
export interface User {
  id: number;
  email: string;
  email_verified: boolean;
  created_at: string; 
  linked_accounts: any[]; 
  balance?: number; 
}