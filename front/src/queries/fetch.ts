// queries/createFetch.ts
const API_URL = process.env.NEXT_PUBLIC_API_URL ?? ''

interface FetchOptions extends RequestInit {
  token?: string
}

const defaultHeaders: HeadersInit = {
  'Content-Type': 'application/json',
}

// 클라이언트에서만 사용되는 함수, 서버사이드에서는 따로 사용,
export const getToken = (): string | null => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('token')
  }
  return null
}

export const _fetch = async <T>(path: string, options: FetchOptions = {}): Promise<T> => {
  const token = options.token || getToken() || process.env.NEXT_PUBLIC_TEST_ACCOUNT_TOKEN
  const headers: Headers = new Headers({
    ...defaultHeaders,
    ...options.headers,
  })

  if (token) {
    headers.append('Authorization', `Bearer ${token}`)
  }
  const response = await fetch(`${API_URL}${path}`, {
    ...options,
    headers,
  })

  if (!response.ok) {
    throw new Error('Failed to fetch')
  }

  return response.json()
}
