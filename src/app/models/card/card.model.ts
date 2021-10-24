export interface CardModel {
  id: number;
  text: string;
  enabled?: boolean;
  dateEdit?: Date;
}

export class CardModelEx implements CardModel {
  id: number;
  text: string;
  enabled?: boolean;
  dateEdit?: Date;

  show?: boolean;
  private editMode?: boolean;
  private textBackup?: string;

  get isEditMode(): boolean {
    return this.editMode ?? false;
  }

  doEdit() {
    this.editMode = true;
    this.textBackup = this.text;
  }
  doSave() {
    this.editMode = false;
    this.textBackup = "";
  }
  doCancel() {
    this.text = this.textBackup;
    this.doSave();
  }
}

export function getEmptyCard(id: number): CardModel {
  return {
    id: id,
    text: ""
  }
}

export function cardModelToEx(card: CardModel): CardModelEx {
  const result = new CardModelEx();
  result.id = card.id;
  result.text = card.text;
  result.show = false;
  result.enabled = card.enabled;

  return result;
}