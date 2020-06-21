import { CRRequest } from './Request'
import { Clan, ClanWarlog } from './Models'

const ParseTag = (tag: string) =>
  encodeURIComponent(tag.charAt(0) === '#' ? tag : `#${tag}`)

export async function GetClan(clanTag: string) {
  return CRRequest<Clan>({
    path: ['clans', ParseTag(clanTag)],
  }).catch(err => (err.response.status === 404 ? null : Promise.reject(err)))
}

export async function GetClanWarlog(clanTag: string) {
  return CRRequest<ClanWarlog>({
    path: ['clans', ParseTag(clanTag), 'warlog'],
  }).catch(err => (err.response.status === 404 ? null : Promise.reject(err)))
}
