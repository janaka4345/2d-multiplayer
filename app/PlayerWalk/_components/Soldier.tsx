/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function Soldier(props) {
    const group = useRef();
    const { nodes, materials, animations } = useGLTF("./Soldier.glb");
    const { actions } = useAnimations(animations, group);
    return (
        <group ref={group} {...props} dispose={null}>
            <group name="Scene">
                <group name="Character" rotation={[-Math.PI / 2, 0, 0]} scale={0.01}>
                    <skinnedMesh
                        name="vanguard_Mesh"
                        geometry={nodes.vanguard_Mesh.geometry}
                        material={materials.VanguardBodyMat}
                        skeleton={nodes.vanguard_Mesh.skeleton}
                    />
                    <skinnedMesh
                        name="vanguard_visor"
                        geometry={nodes.vanguard_visor.geometry}
                        material={materials.Vanguard_VisorMat}
                        skeleton={nodes.vanguard_visor.skeleton}
                    />
                    <primitive object={nodes.mixamorigHips} />
                </group>
            </group>
        </group>
    );
}

useGLTF.preload("./Soldier.glb");
