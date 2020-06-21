import { GetClan } from '../ClashRoyale/Api'
import { GetClanInactiveMembers } from '../Domain/Clan'

export async function GetInactiveMembers(
  clanTag: string,
  maxInactiveDays: number,
) {
  const clan = await GetClan(clanTag)

  if (!clan) {
    return
  }

  return GetClanInactiveMembers(clan.memberList, maxInactiveDays)
}
