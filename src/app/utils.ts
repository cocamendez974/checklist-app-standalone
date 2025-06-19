import { environment } from '../environments/environment'; 
import { SessionService } from './services/session.service';

export function getToken(): string {
  return environment.token;
}

export function getCurrentDate(): string {
  const today = new Date();
  const day = today.getDate().toString().padStart(2, '0');
  const month = (today.getMonth() + 1).toString().padStart(2, '0');
  const year = today.getFullYear();
  return `${day}/${month}/${year}`;
}

export function getCurrentTime(): string {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  return `${hours}:${minutes}:${seconds}`;
}

export function getSacEmail(): string {
  const sacEmail = environment.sacEmail;
  return sacEmail;
}

