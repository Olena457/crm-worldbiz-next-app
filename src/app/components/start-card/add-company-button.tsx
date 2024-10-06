'use client';

import React from 'react';
import Button from './button';
import { useRouter } from 'next/navigation';

export interface AddCompanyButtonProps {}

export default function AddCompanyButton({}) {
  const router = useRouter();
  return (
    <>
      <Button onClick={() => router.push('/companies/new', { scroll: false })}>
        Add company
      </Button>
    </>
  );
}
