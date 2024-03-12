import { SearGymsUseCase } from '../search-gyms'
import { PrismaGymsRepository } from '@/http/repositories/prisma/prisma-gyms-repository'

export function makeSearchGymsUseCase() {
  const gymsRepository = new PrismaGymsRepository()
  const useCase = new SearGymsUseCase(gymsRepository)

  return useCase
}
