export type Arena = {
  id: number
  name: string
}

export type Location = {
  id: number
  name: string
  isCountry: boolean
  countryCode: string
}

export type ClanRole = 'coLeader' | 'elder' | 'member'
export type ClanType = 'open'
export type ClanChestStatus = 'inactive'

export type ClanMember = {
  tag: string
  name: string
  role: ClanRole
  lastSeen: string
  expLevel: string
  trophies: string
  arena: Arena
  clanRank: number
  previousClanRank: number
  donations: number
  donationsReceived: number
  clanChestPoints: number
}

export type Clan = {
  tag: string
  name: string
  type: ClanType
  description: string
  badgeId: number
  clanScore: number
  clanWarTrophies: number
  location: Location
  requiredTrophies: number
  donationsPerWeek: number
  clanChestStatus: ClanChestStatus
  clanChestLevel: number
  clanChestMaxLevel: number
  members: number
  memberList: ClanMember[]
}

export type ClanWarParticipant = {
  tag: string
  name: string
  cardsEarned: number
  battlesPlayed: number
  wins: number
  collectionDayBattlesPlayed: number
  numberOfBattles: number
}

export type ClanWar = {
  seasonId: number
  createdDate: string
  participants: ClanWarParticipant[]
  // standings
}

export type ClanWarlog = {
  items: ClanWar[]
}
