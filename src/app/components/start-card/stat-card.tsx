import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

export enum StatCardType {
  Dark = 'dark',
  Gradient = 'gradient',
}

export interface StatCardProps {
  type: StatCardType;
  label: string;
  counter: number;
}
