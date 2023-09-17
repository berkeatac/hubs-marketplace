// Enums
enum State {
  DEMO = 'DEMO',
  ACTIVE = 'ACTIVE'
}

enum Category {
  ASSIGNABLE = 'ASSIGNABLE'
}

enum Stage {
  PILOT = 'PILOT',
  FULLY_ONBOARDED = 'FULLY_ONBOARDED'
}

enum Type {
  COLLECTION_COMPANY = 'Collection Company',
  WASTE_COLLECTION = 'Waste Collection',
  RECYCLING_COMPANY = 'Recycling Company',
  WASTE_COLLECTION_RECYCLING = 'Waste Collection & Recycling'
}

enum HubUnassignedRecoveryState {
  PARTIALLY_ASSIGNED = 'PARTIALLY_ASSIGNED',
  UNASSIGNED = 'UNASSIGNED'
}

// Types
type Image = {
  uuid: string
  directLink: string
  thumbnailDirectLink: string
  processedDirectLink: null
  processedThumbnailDirectLink: null
  fileName: string
  size: number
}

type HubUnassignedRecoveryList = {
  uuid: string
  createdAt: string
  state: HubUnassignedRecoveryState
  unassignedQuantity: number
  assignedQuantity: number
  quantityUnit: string
}

type Hub = {
  uuid: string
  state: State
  category: Category
  stage: Stage
  name: string
  displayName: string
  slug: string
  type: Type
  location: string
  externalId: string
  recoveredQuantity: number
  recoveredQuantityUnit: string
  totalRecoveredQuantity: number
  collectionAndSortingParagraph: string
  pageMode: string
  hubUnassignedRecoveryList: HubUnassignedRecoveryList[]
  referenceQuantityUnit: string
  parentHubName: string
  logo: Image
  cardDescription: string
  cardImage: Image
  thankYouNote: string | null
  portfolioAssignedQuantityPercentage: number | null
  unassignedQuantityPercentage: number
  unassignedQuantityTotal: number
  assignable: boolean
  formattedRecoveredQuantity: string
  formattedTotalRecoveredQuantity: string
}

type HubsResponse = Hub[]

export type { HubsResponse, Hub }
