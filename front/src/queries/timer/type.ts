/**
 * @interface TimerResult
 * @property {number} id - 타이머 id
 * @property {number} userId - 유저 id
 * @property {number} routineId - 루틴 id
 * @property {number} seconds - 타이머 시간
 */

export interface TimerResult {
  id: number
  userId: number
  routineId: number
  seconds: number
}
