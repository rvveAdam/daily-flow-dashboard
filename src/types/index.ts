export type RepeatType = 'none' | 'daily' | 'weekly' | 'monthly' | 'custom'

export interface Task{
    id: string
    title: string
    done: boolean
    repeatType: RepeatType
    repeatDays: number[]  
    streak: number
}

export type ExpenseCategory = string

export interface Expense {
  id: string
  amount: number
  category: ExpenseCategory
  description: string
  date: string
}


