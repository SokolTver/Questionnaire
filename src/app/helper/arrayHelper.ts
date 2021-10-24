export class ArrayHelper {
  // Удаляет элемент из массива
  public static Remove<T>(array: T[], item: T) {
    let index = array.indexOf(item);
    console.log(index);
    if (index > -1)
        array.splice(index, 1);
  }

// Заменяет элемент в массиве
  public static Replace<T>(array: T[], oldItem: T, newItem: T) {
    let index = array.indexOf(oldItem);
    if (index > -1)
        array.splice(index, 1, newItem)
  }
}