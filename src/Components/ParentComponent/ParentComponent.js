import React from 'react'
import ChildComponent from '../ChildComponents/ChildComponents'

const ParentComponent = () => {
    const testCallBackFn = x => alert(`hello ${x}`)
    return (
        <div>
            <h1>Hello from parent component</h1>
            <ChildComponent
                name="John"
                age={25}
                isStudent={true}
                skills={["html", "css", "js"]}
                lang={{ english: "excellent", french: "good" }}
                testCallBackFn={testCallBackFn}
            />
        </div>
    )
}

export default ParentComponent
