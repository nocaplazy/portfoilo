import { simplyProject } from './simply';
import { TagType } from '@/components/tag';
import { scouit } from './scouit';
import { entry } from './entry';
import { dms } from './dms';
import { repo } from './repo';
import { ReactNode } from 'react';
import { lazy05CreateReactApp } from './webpack-starter';

interface FunctionType {
  summary: string;
  detail: ReactNode;
}

interface UrlType {
  alt: string;
  url: string;
  Icon: JSX.Element;
}

export interface ProjectType {
  id: string;
  title: string;
  MVP: string;
  technologyStackList: TagType[];
  anchor: UrlType[];
  features: FunctionType[];
  thumnail: string;
  role: string;
  personnel: string;
}

export const projects = [scouit, lazy05CreateReactApp];

export const addtionalProjects = [entry, dms, repo, simplyProject];
