import { BikeService } from './bike.service';
import { UserService } from './user.service';

export const services: any[] = [BikeService, UserService];

export * from './bike.service';
export * from './user.service';
