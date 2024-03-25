import React, { useEffect } from "react"
import { useKey } from "rooks"
import { useModal } from "../hooks/useModal"

const ModalWrapper = ({ children }: { children: React.ReactNode }) => {
  const { modals, close } = useModal()

  const modalRef = React.useRef<HTMLDivElement>(null)

  useEffect(() => {
    const modal = modalRef.current
    if (modals.length && modal) {
      // disable main window scrolling and enable modal scrolling
      document.body.style.overflow = "hidden"

      modalRef.current.focus()
      modalRef.current.style.overflow = "auto"
    }
  }, [modals])

  useKey(
    "Escape",
    () => {
      document.body.style.overflow = "auto"
      close()
    },
    { eventTypes: ["keydown"], when: !!modals.length }
  )

  return (
    <div
      ref={modalRef}
      className="fixed inset-0 bg-black bg-opacity-50 flex px-10 items-center justify-center"
    >
      {children}
    </div>
  )
}

export default ModalWrapper
