

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Room(props) {
  const { nodes, materials } = useGLTF('/models/computer-optimized.glb')
  return (
    <group scale={[0.05, 0.05, 0.05]} >
    <group {...props} dispose={null}>
      <group position={[0, 0, 0]}>
        <mesh geometry={nodes.Cube000_ComputerDesk_0001_1.geometry} material={materials['ComputerDesk.001']} />
        <mesh geometry={nodes.Cube000_ComputerDesk_0001_2.geometry} material={materials['FloppyDisk.001']} />
      </group>
    </group>
    </group>
  )
}

useGLTF.preload('/models/computer-optimized.glb')
