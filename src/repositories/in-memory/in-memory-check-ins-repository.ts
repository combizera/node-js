import { randomUUID } from 'node:crypto'

import { CheckIn, Prisma } from 'generated/prisma'
import { CheckInRepository } from '@/repositories/check-ins-repository'

export class InMemoryCheckInsRepository implements CheckInRepository {
  public items: CheckIn[] = []

  async create(data: Prisma.CheckInUncheckedCreateInput) {
    const checkIn = {
      id: randomUUID(),
      user_id: data.user_id,
      gym_id: data.gym_id,
      validated_at: new Date(data.validated_at!),
      created_at: new Date(),
    }

    this.items.push(checkIn)

    return checkIn
  }
}
