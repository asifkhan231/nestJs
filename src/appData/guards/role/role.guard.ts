import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { Roles } from 'src/appData/decorator/role/role.decorator';

const fakeUser = {
  useName: "Asif khan",
  role: [
    'manager',
    "owner",
    'man'
  ]
}
@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private refelector: Reflector) { }
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const requestRoles = this.refelector.get(Roles, context.getHandler())
    console.log(requestRoles)
    if (requestRoles.every(requestRole => fakeUser.role.includes(requestRole))) {
      return true;

    }
    return false
  }
}
