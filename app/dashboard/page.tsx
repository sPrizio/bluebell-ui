'use client'

import BaseCard from "@/app/components/Card/BaseCard";
import {useEffect, useState} from "react";

export default function Dashboard() {

    const [isLoading, setIsLoading] = useState<boolean>(false)

    useEffect(() => {
    }, [])


    //  RENDER

    return (
        <div className="">
            <br/>
            {/*<SimpleButton variant={"primary"} text={'Primary'}  />
            <br />
            <SimpleButton variant={"secondary"} text={'Secondary'}  />
            <br />
            <SimpleButton variant={"tertiary"} text={'Tertiary'}  />
            <br />
            <SimpleButton variant={"secondary"} text={'Primary'} loading={true}  />
            <br />
            <SimpleButton variant={"primary"} text={'Primary'} plain={true}  />
            <br />
            <SimpleButton variant={"secondary"} text={'Secondary (Active)'} plain={true} active={true}  />
            <br />*/}
            <div className="container">
                <BaseCard
                    hasBorder={false}
                    content={[<p key={0}>This is a test</p>, <p key={1}>This is another test</p>]}
                />
            </div>
        </div>
    )
}

