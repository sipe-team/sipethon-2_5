/**
 * History interface
 *
 * @interface History
 * @property {number} id - 히스토리 id
 * @property {string} title - 히스토리 제목
 * @property {number} count - 히스토리 완료 카운트
 *
 */

export interface HistorySet {
  id: number
  title: string
  count: number
}

export interface HistoryDetail {
  id: number
  title: string
  count: number
  routine: {
    id: number
    name: string
    description: string
  }
  historyLogs: {
    id: number
    count: number
    createdAt: string
  }[]
}
