import React from "react";


export default function InputRow({ children }: { children: React.ReactNode }) {
    return (
        <div className="input__row">
            {
                children
            }
        </div>
    )
}
