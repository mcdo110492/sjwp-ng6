export interface MinistersModel {
  id: number;
  name: string;
  active?: number;
  created_at?: Date;
  updated_at?: Date;
}

export interface MinisterResponseModel {
  count: number;
  data: MinistersModel[];
}
