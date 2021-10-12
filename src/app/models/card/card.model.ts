export interface CardModel {
  id: number;
  text: string;
}

export interface CardModelEx extends CardModel {
  show: boolean;
}

export function cardModelToEx(model: CardModel): CardModelEx {
  return {
    id: model.id,
    text: model.text,
    show: false
  } as CardModelEx;
}