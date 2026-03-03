export type RepeatType = 'none' | 'daily' | 'weekly' | 'monthly' | 'custom'
export type TimeOfDay = 'morning' | 'afternoon' | 'evening'

export interface Task{
    id: string
    title: string
    done: boolean
    repeatType: RepeatType
    repeatDays: number[]  
    streak: number
    timeOfDay: TimeOfDay
}

export type ExpenseCategory = string

export interface Expense {
  id: string
  amount: number
  category: ExpenseCategory
  description: string
  date: string
}
