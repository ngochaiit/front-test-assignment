export interface CollectionItem {
  id: number;
  player: Player;
}

export interface Player {
  firstname: string;
  lastname: string;
  birthday: Date;
  image: string;
}
