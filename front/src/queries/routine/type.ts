/**
 * routine interface
 *
 * @interface routine
 * @property {number} id - 루틴 id
 * @property {string} name - 루틴 제목
 * @property {string} description - 루틴 설명
 * @property {string} time - 루틴 시간 (서버에서 받아옴, 사용자가 입력하면, 서버에서 업데이트)
 *
 */

export interface Routine {
  id: number
  name: string
  description: string
  time: string
}
