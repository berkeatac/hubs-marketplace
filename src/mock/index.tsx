import {
  Hub,
  State,
  Category,
  Stage,
  Type,
  HubUnassignedRecoveryState
} from '../types'

export const mockSingleHubData: Hub = {
  uuid: '0a60664f-cfd2-478a-8c1b-0b78f90c81eb',
  state: 'DEMO' as State,
  category: 'ASSIGNABLE' as Category,
  stage: 'PILOT' as Stage,
  name: 'Green Worm Sorting',
  displayName: 'Green Worms',
  slug: 'green-worms',
  type: 'Collection Company' as Type,
  location: 'Kerala, India',
  externalId: '9b0b3a2a-44c2-4abf-9323-98a52d1de94c',
  recoveredQuantity: 91149.21,
  recoveredQuantityUnit: 'KG',
  totalRecoveredQuantity: 163023.54,
  collectionAndSortingParagraph:
    'Green Worms Waste Management runs door-to-door collection services to intercept plastic waste before it can enter the environment. The collection efforts are performed by women self-help groups across various municipalities in Kerala, India and create critical employment opportunities in the community.',
  pageMode: 'RELEASED',
  hubUnassignedRecoveryList: [
    {
      uuid: '910b522d-3ac1-4f7a-b921-b74bc15065d6',
      createdAt: '2023-05-05T11:36:08.252231Z',
      state: 'PARTIALLY_ASSIGNED' as HubUnassignedRecoveryState,
      unassignedQuantity: 50.0,
      assignedQuantity: 40.24221,
      quantityUnit: 'KG'
    }
  ],
  referenceQuantityUnit: 'KG',
  parentHubName: 'Portfolio',
  logo: {
    uuid: '8408f0bd-607f-4627-bd96-61e44a422045',
    directLink:
      'https://cleanhub-marketplace-pictures-demo.s3.eu-central-1.amazonaws.com/admin/159f2c0844106245575ae2a7af8f449ecf01205100b472786693f6e435d0d7af?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230916T235112Z&X-Amz-SignedHeaders=host&X-Amz-Expires=86400&X-Amz-Credential=AKIAYGJI4AGSXCP3IH5T%2F20230916%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Signature=c1db503d2e40e5f7215fd93901408e9206dffc51ce56ef54fa3a7e4769a74b18',
    thumbnailDirectLink:
      'https://cleanhub-marketplace-pictures-demo.s3.eu-central-1.amazonaws.com/admin/768b22883c35bb3e56a6126070c518792eb06d22f675e643f93551b80b3e3a35?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230916T235112Z&X-Amz-SignedHeaders=host&X-Amz-Expires=86400&X-Amz-Credential=AKIAYGJI4AGSXCP3IH5T%2F20230916%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Signature=8e28e7fa06a87d700590048d83a543b6472901a47052d2f3d8f13a4354bb50c2',
    processedDirectLink: null,
    processedThumbnailDirectLink: null,
    fileName: 'Size=XL, Which=Green Worms.png',
    size: 21797
  },
  cardDescription:
    'Green Worms Waste Management runs door-to-door collection services to intercept plastic waste before it can enter the environment. The collection efforts are performed by women self-help groups across various municipalities in Kerala, India and create critical employment opportunities in the community.',
  cardImage: {
    uuid: '441acbe5-db9f-4546-9cc9-9b2dbbafc417',
    directLink:
      'https://cleanhub-marketplace-pictures-demo.s3.eu-central-1.amazonaws.com/admin/01bc73853ad8b23a53071700a2239d5dc3360875fed87abe3ad4a1b42ef4984e?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230916T235112Z&X-Amz-SignedHeaders=host&X-Amz-Expires=86400&X-Amz-Credential=AKIAYGJI4AGSXCP3IH5T%2F20230916%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Signature=247c597f9238148540fe14d4c1513dda9343e9c0f7a36993ad71762f7129b5ae',
    thumbnailDirectLink:
      'https://cleanhub-marketplace-pictures-demo.s3.eu-central-1.amazonaws.com/admin/110780c47a9af93c919962aa26387403b7bb218c0e8fb813baedf7b932746909?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230916T235112Z&X-Amz-SignedHeaders=host&X-Amz-Expires=86400&X-Amz-Credential=AKIAYGJI4AGSXCP3IH5T%2F20230916%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Signature=f8d2c220590f552856a30b73eb9d416299ef6e003063dd41f5482f378212f707',
    processedDirectLink: null,
    processedThumbnailDirectLink: null,
    fileName: 'green_worms_card.jpeg',
    size: 509039
  },
  thankYouNote:
    'Greenworms recovers zero or negative value plastic waste from waste streams. One of the great challenges to scale up our plastics waste recovery initiatives has been non recyclable Multi Layered Plastics which has no financial value. With CleanHub’s support we are able to manage MLP waste better and this has helped us to work with more villages, increase our environmental impact and create dignified opportunities for waste workers on the ground.',
  portfolioAssignedQuantityPercentage: null,
  unassignedQuantityPercentage: 10.0,
  unassignedQuantityTotal: 9.75779,
  assignable: true,
  formattedRecoveredQuantity: '91,149',
  formattedTotalRecoveredQuantity: '163,024'
}
