import { useState } from "react"


export const Landing = () => {
    const [open, setOpen] = useState(false) 


    const handleOpen = () => {
        setOpen(!open)
    }
    const handleClose = () => {
        setOpen(!open)
    }

    return (
        <div>
            <div className="flex flex-col gap-8">
                <h3 className="text-4xl self-center"> Code Ninjas </h3>
                <h1 className="font-bold text-8xl "> CODE HOUSES </h1>

                <div className="flex flex-row">
                    <button
                        onClick={handleOpen}
                    >
                        testbutton
                    </button>
                    <dialog
                        open={open}
                        onClose={handleClose}
                    >
                        test
                    </dialog>
                </div>

            </div>
        </div>
    )
}