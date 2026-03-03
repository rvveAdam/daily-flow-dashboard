import { useState } from 'react'

interface CategoryModalProps{
    onAddCategory: (name: string) => void,
    isOpen: boolean,
    onClose: () => void
}

function AddCategoryModal({onAddCategory, isOpen, onClose}: CategoryModalProps) {
    
    const [newCategory, setNewCategory] = useState('')
        const handleAddCategory = () => {
        onAddCategory(newCategory)
        setNewCategory('')
    }

    const [isClosing, setIsClosing] = useState(false)

    if (!isOpen) return null

    const handleClose = () => {
        setIsClosing(true)
    }

    return (
        <div 
            className={isClosing ? 'modal-overlay modal-overlay--closing' : 'modal-overlay'} 
            onClick={handleClose} 
            onAnimationEnd={() => { 
                if (isClosing) { 
                    setIsClosing(false)
                    onClose()
                }
            }}
        >
        <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
                <div className="expense-form__add-category">
                    <input
                        type="text"
                        value={newCategory}
                        onChange={(e) => setNewCategory(e.target.value)}
                        placeholder="Nowa kategoria..."
                    />
                    <button type="button" onClick={handleAddCategory}>+</button>
                </div>
            </div>
        </div>
        </div>
    )
}

export default AddCategoryModal