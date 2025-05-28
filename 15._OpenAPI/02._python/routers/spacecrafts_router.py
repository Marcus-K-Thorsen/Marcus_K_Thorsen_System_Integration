from fastapi import APIRouter, HTTPException, Path
from pydantic import BaseModel, Field
from typing import List

router = APIRouter()

highest_spacecraft_id = 3

class Spacecraft(BaseModel):
    id: int = Field(..., description="Unique identifier for the spacecraft", examples=[1])
    name: str = Field(..., description="Name of the spacecraft", examples=["Apollo 13"])

class SpacecraftRequestModel(BaseModel):
    name: str = Field(..., description="Name of the spacecraft to be created", examples=["Voyager 1"])
    

spacecrafts: List[Spacecraft] = [
    Spacecraft(id=1, name="Apollo 13"),
    Spacecraft(id=2, name="Challenger"),
    Spacecraft(id=3, name="Enterprise"),
]


@router.get(
    path="/api/spacecrafts", 
    description="Get a list of all spacecrafts",
    response_model=List[Spacecraft]
    )
def get_spacecrafts():
    return spacecrafts


@router.get(
    path="/api/spacecrafts/{spacecraft_id}", 
    description="Get a spacecraft by its ID",
    response_model=Spacecraft
    )
def get_spacecraft_by_id(spacecraft_id: int = Path(..., description="ID of the spacecraft to retrieve", example=1)):
    for spacecraft in spacecrafts:
        if spacecraft.id == spacecraft_id:
            return spacecraft
    raise HTTPException(status_code=404, detail="Spacecraft not found")


@router.post(
    path="/api/spacecrafts", 
    description="Create a new spacecraft",
    response_model=Spacecraft
    )
def create_spacecraft(spacecraft: SpacecraftRequestModel):
    global highest_spacecraft_id
    highest_spacecraft_id += 1
    new_spacecraft = Spacecraft(id=highest_spacecraft_id, name=spacecraft.name)
    spacecrafts.append(new_spacecraft)
    return new_spacecraft