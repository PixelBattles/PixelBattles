﻿using System;

namespace PixelBattles.Shared.DataTransfer.Api.Battle
{
    public class BattleDTO
    {
        public Guid BattleId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
    }
}
