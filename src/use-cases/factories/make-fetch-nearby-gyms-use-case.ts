import { FetchNearbyUseCase } from '../fetch-nearby-gyms'
import { PrismaGymsRepository } from '@/http/repositories/prisma/prisma-gyms-repository'

export function makeFetchNearbyGymsUseCase() {
  const gymsRepository = new PrismaGymsRepository()
  const useCase = new FetchNearbyUseCase(gymsRepository)

  return useCase
}
