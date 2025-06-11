'use client';

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const avatarTypes = ["Human", "Alien", "Kangaroo", "Gorilla"];
const hairStyles = ["Short", "Long", "Afro", "Mohawk"];
const upperBodies = ["T-Shirt", "Jacket", "Lab Coat", "Hoodie"];
const lowerBodies = ["Jeans", "Shorts", "Joggers", "Cyber Pants"];
const accessories = ["Cap", "Beanie", "Mask", "Sunglasses"];
const colors = ["Black", "White", "Neon Green", "Purple"];

export default function AvatarBuilder() {
    const [type, setType] = useState("Human");
    const [hairStyle, setHairStyle] = useState("Short");
    const [hairColor, setHairColor] = useState("Black");
    const [upper, setUpper] = useState("T-Shirt");
    const [lower, setLower] = useState("Jeans");
    const [accessory, setAccessory] = useState("Cap");

    return (
        <div className="min-h-screen bg-black text-white p-6">
            <h1 className="text-4xl font-bold text-center mb-6">Create Your Freq</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Options */}
                <div className="space-y-4">
                    <Label>Type</Label>
                    <select onChange={(e) => setType(e.target.value)} value={type} className="w-full p-2 bg-zinc-900 rounded">
                        {avatarTypes.map((t) => <option key={t}>{t}</option>)}
                    </select>

                    <Label>Hair Style</Label>
                    <select onChange={(e) => setHairStyle(e.target.value)} value={hairStyle} className="w-full p-2 bg-zinc-900 rounded">
                        {hairStyles.map((h) => <option key={h}>{h}</option>)}
                    </select>

                    <Label>Hair Color</Label>
                    <select onChange={(e) => setHairColor(e.target.value)} value={hairColor} className="w-full p-2 bg-zinc-900 rounded">
                        {colors.map((c) => <option key={c}>{c}</option>)}
                    </select>

                    <Label>Upper Body</Label>
                    <select onChange={(e) => setUpper(e.target.value)} value={upper} className="w-full p-2 bg-zinc-900 rounded">
                        {upperBodies.map((u) => <option key={u}>{u}</option>)}
                    </select>

                    <Label>Lower Body</Label>
                    <select onChange={(e) => setLower(e.target.value)} value={lower} className="w-full p-2 bg-zinc-900 rounded">
                        {lowerBodies.map((l) => <option key={l}>{l}</option>)}
                    </select>

                    <Label>Accessory</Label>
                    <select onChange={(e) => setAccessory(e.target.value)} value={accessory} className="w-full p-2 bg-zinc-900 rounded">
                        {accessories.map((a) => <option key={a}>{a}</option>)}
                    </select>
                </div>

                {/* Preview */}
                <Card className="bg-zinc-800 border border-zinc-600 text-center p-4 flex flex-col justify-center items-center">
                    <CardContent>
                        <h2 className="text-xl font-semibold mb-4">Live Preview</h2>
                        <div className="bg-zinc-900 p-6 rounded-lg shadow-md text-sm">
                            <p><strong>Type:</strong> {type}</p>
                            <p><strong>Hair:</strong> {hairStyle} ({hairColor})</p>
                            <p><strong>Upper:</strong> {upper}</p>
                            <p><strong>Lower:</strong> {lower}</p>
                            <p><strong>Accessory:</strong> {accessory}</p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
