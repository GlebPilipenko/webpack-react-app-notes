import { AxiosResponse } from 'axios';

import { Nullable } from 'types';

export type GeneratorType<T = Nullable> = Generator<unknown, void, AxiosResponse<T>>;
