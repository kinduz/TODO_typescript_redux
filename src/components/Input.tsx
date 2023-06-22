import React from 'react'

interface ItemProps {
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}

const Input: React.FC<ItemProps> = ({handleSubmit}) => {
  return (
    <form className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            className="input__todo"
            placeholder="What needs to be done?"
          />
        </form>
  )
}

export default Input