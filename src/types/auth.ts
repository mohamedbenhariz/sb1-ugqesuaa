export interface User {
  id: string;
  email: string;
  name: string;
  plan: 'free' | 'standard' | 'standard_plus' | 'premium';
  trialEndsAt?: Date;
  createdAt: Date;
}

export interface AuthState {
  user: User | null;
  isLoading: boolean;
  error: string | null;
}