import { ForbiddenException } from '@nestjs/common';
import { Request } from 'express';

export const extractSubdomain = (req: Request): string => {
  const host = req.hostname; // {subdomain}.example.com

  const parts = host.split('.');

  if (parts.length < 3) throw new ForbiddenException(`Invalid hostname: ${host}`);

  const [subdomain] = parts;

  return subdomain;
};
