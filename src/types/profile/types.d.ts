import type { EmptyObject } from '@/types/utils-types'
import type { RequestParams } from '@/types/utils'

export type User =
  | EmptyObject
  | {
      id: string
      repos_url: string
      avatar_url: string
      html_url: string
      name: string
      login: string
      public_repos: number
      followers: number
      created_at: string
      updated_at: string
    }

export interface Repository {
  id: number
  name: string
  description: string
  url: string
  html_url: string
  created_at: string
  updated_at: string
  pushed_at: string
  language: string
  stargazers_count: number
  fork: boolean
  archived: boolean
  ssh_url: string
  clone_url: string
}

export type ReposSort = 'pushed' | 'created' | 'updated' | 'full_name'

export type ReposSortOption = {
  option: 'sort'
  value: ReposSort
}

export type ReposFilterOption = {
  option: 'hideForks' | 'hideArchived'
  value: boolean
}

export type ReposOption = ReposSortOption | ReposFilterOption

export type ReposOptions = {
  sort: ReposSort
  hideForks: boolean
  hideArchived: boolean
}

export type RepoParams = Partial<ReposOptions> & RequestParams
