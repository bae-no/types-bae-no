export class CreateUserAddressDto {
  name!: string;

  place!: string;

  latitude!: number;

  longitude!: number;

  isDefault?: boolean;
}
