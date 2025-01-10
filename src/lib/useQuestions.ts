import { kubernetesData } from '../data/kubernetes';

export const useQuestions = () => {
  const version = import.meta.env.VITE_DATA_VERSION;
  return kubernetesData;
};