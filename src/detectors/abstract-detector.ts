export type TextRangeTuple = [number, number]

export class AbstractDetector {

  protected isInRange(range: TextRangeTuple, targetRange: TextRangeTuple): boolean {
    return range[0] <= targetRange[0] && targetRange[1] <= range[1]
  }

}
